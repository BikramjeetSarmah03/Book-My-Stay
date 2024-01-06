"use client";

import { createContext, useContext } from "react";
import { useQuery } from "react-query";

import * as services from "@/services/auth.service";

type AppContextType = {
  isLoggedIn: boolean;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isError } = useQuery("validateToken", services.validateToken, {
    retry: false,
  });

  const values: AppContextType = {
    isLoggedIn: !isError,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContextType;
};
