import { CategoriesRepository } from "../../repositories/implemetations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategorycontroller";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

const categoryRepository = CategoriesRepository.getInstace();
const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
