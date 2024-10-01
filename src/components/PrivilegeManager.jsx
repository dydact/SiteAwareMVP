import React, { useState, useEffect } from 'react';
import { privilegeApi, roleApi } from '@/services/api';

const resources = ['clients', 'projects', 'invoices', 'time-entries'];
const actions = ['create', 'read', 'update', 'delete'];

function PrivilegeManager({ organizationId }) {
  const [roles, setRoles] = useState([]);
  const [privileges, setPrivileges] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchRolesAndPrivileges();
  }, [organizationId]);

  const fetchRolesAndPrivileges = async () => {
    try {
      setLoading(true);
      const [rolesResponse, privilegesResponse] = await Promise.all([
        roleApi.getRoles(),
        privilegeApi.getPrivileges(organizationId),
      ]);
      setRoles(rolesResponse.data);
      setPrivileges(privilegesResponse.data);
    } catch (err) {
      setError('Failed to fetch roles and privileges');
    } finally {
      setLoading(false);
    }
  };

  const handlePrivilegeChange = async (roleId, resource, action, allowed) => {
    try {
      await privilegeApi.updatePrivilege(organizationId, roleId, resource, action, allowed);
      fetchRolesAndPrivileges();
    } catch (err) {
      setError('Failed to update privilege');
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="privilege-manager">
      <h2 className="text-2xl font-bold mb-4">Privilege Manager</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Role</th>
            {resources.map(resource => (
              <th key={resource} colSpan={actions.length}>{resource}</th>
            ))}
          </tr>
          <tr>
            <th></th>
            {resources.map(resource => (
              actions.map(action => (
                <th key={`${resource}-${action}`}>{action}</th>
              ))
            ))}
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td>{role.name}</td>
              {resources.map(resource => (
                actions.map(action => (
                  <td key={`${role.id}-${resource}-${action}`}>
                    <input
                      type="checkbox"
                      checked={privileges[role.id]?.[resource]?.[action] || false}
                      onChange={(e) => handlePrivilegeChange(role.id, resource, action, e.target.checked)}
                    />
                  </td>
                ))
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PrivilegeManager;