import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/db";
import moment from "moment";
import { Button } from "@/components/ui/button";
import CreateUserButton from "@/components/create-user-button";

const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const UserPage = async () => {
  const users = await getAllUsers();

  return (
    <div className="p-10">
      <CreateUserButton />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead>Token</TableHead>
            <TableHead className="text-right">Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!users.length && (
            <TableRow>
              <TableCell colSpan={3}>No users found</TableCell>
            </TableRow>
          )}
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.email}</TableCell>
              <TableCell className="font-medium">{user.token}</TableCell>
              <TableCell className="text-right">
                {moment(user.createdAt).format("DD MMM YYYY")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserPage;
