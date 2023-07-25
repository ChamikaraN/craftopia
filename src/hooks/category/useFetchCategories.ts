import { useQuery } from "react-query";
import { toast } from "react-toastify";
import logEvent from "../../utils/logger";
import { ERROR, INFO } from "../../constants/sanityConst";
import { Category } from "../../types";
import { useAppDispatch } from "../../redux/hooks";
import { fetchCategories } from "../../services/CategoryService";
import { loadCategories } from "../../redux/Category/categorySlice";

const useFetchCategories = () => {
  const dispatch = useAppDispatch();
  return useQuery<Category[], Error>("fetch-categories", fetchCategories, {
    onSuccess: async (data) => {
      dispatch(loadCategories(data));
      await logEvent(INFO, "Categories Fetched", {
        additionalData: JSON.stringify(data),
      });
    },
    onError: async (error: Error) => {
      toast.error("Failed to fetch categories 😲");
      await logEvent(ERROR, error.message, { additionalData: error.stack });
    },
    staleTime: 10000, // 10 seconds
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export default useFetchCategories;
