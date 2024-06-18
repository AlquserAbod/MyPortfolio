import { useState, useEffect } from 'react';
import { PaginationModel, PaginationKey } from '@/types';

// Initial models with default values
const initialPaginationModels: Record<PaginationKey, PaginationModel> = {
  [PaginationKey.Skills]: { pageSize: 10, page: 0 },
  [PaginationKey.Users]: { pageSize: 5, page: 0 },
  [PaginationKey.Projects]: { pageSize: 10, page: 0 },
  [PaginationKey.Contacts]: { pageSize: 25, page: 0 },
  [PaginationKey.Categories]: { pageSize: 5, page: 0 },
  // Add more keys as needed
};

export const usePaginationModel = (key: PaginationKey): { paginationModel: PaginationModel; setPaginationModel: (model: PaginationModel) => void } => {
  // Initialize state with initial model or load from local storage
  const [paginationModel, setPaginationModel] = useState<PaginationModel>(() => {
    const storedModel = localStorage.getItem(`${key}_paginationModel`);
    return storedModel ? JSON.parse(storedModel) : initialPaginationModels[key];
  });

  // Save paginationModel to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(`${key}_paginationModel`, JSON.stringify(paginationModel));
  }, [key, paginationModel]);

  return {
    paginationModel,
    setPaginationModel,
  };
};
