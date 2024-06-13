import { Router } from 'express';
import { loginAdmin } from '../services/adminService.js';
import { addNewProductToMenu, updateProductInMenu, deleteProductFromMenu } from "../services/menuService.js";
import { validateProduct } from "../middleware/validateProduct.js";

const adminRouter = Router();

// POST /admin/login för att logga in en admin
adminRouter.post("/login", loginAdmin);

// "POST"/admin Lägger till en ny produkt i menyn
adminRouter.post("/products", validateProduct, addNewProductToMenu);

// "PUT"/admin Uppdaterar en produkt i menyn
adminRouter.put("/products/:id", validateProduct, updateProductInMenu);

// "DELETE"/admin/:id Tar bort en produkt från menyn
adminRouter.delete("/products/:id", deleteProductFromMenu);

// "POST" /admin/logout för att logga ut en admin
adminRouter.post("/logout", (req, res) => {
    global.currentUser = null;
    res.status(200).json({ message: "Logged out successfully" });
});

export default adminRouter;