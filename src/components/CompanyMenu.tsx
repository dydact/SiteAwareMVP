import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Button } from "../ui/button"

export const CompanyMenu: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Company</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Company Profile</DropdownMenuItem>
        <DropdownMenuItem>Manage Locations</DropdownMenuItem>
        <DropdownMenuItem>Billing Settings</DropdownMenuItem>
        <DropdownMenuItem>User Management</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}