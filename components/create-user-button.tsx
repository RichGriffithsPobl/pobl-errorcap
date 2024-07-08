"use client";

import React from "react";
import { Button } from "./ui/button";
import prisma from "@/lib/db";
import { createUser } from "@/actions/userActions";

const CreateUserButton = () => {
  const handleNewUser = async () => {
    const created = await createUser();
  };

  return (
    <Button className="mb-10" onClick={handleNewUser}>
      Create New User
    </Button>
  );
};

export default CreateUserButton;
