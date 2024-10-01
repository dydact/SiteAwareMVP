import React from 'react'
import { CompanyMenu } from './CompanyMenu'
import { UserMenu } from './UserMenu'

interface LayoutProps {
  children: React.ReactNode;
  user: { name: string; avatarUrl: string } | null;
}

export const Layout: React.FC<LayoutProps> = ({ children, user }) => {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">SiteAware</h1>
          <div className="flex items-center space-x-4">
            <CompanyMenu />
            <UserMenu user={user} />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}