import { useState } from "react";

export const HandleMenuList = () => {
    const [openCategorias, setOpenCategorias] = useState(true);
    const [openMenu, setOpenMenu] = useState(false);

  const handleCategoriasClick = () => {
    setOpenCategorias(true);
    setOpenMenu(false);
  };

  const handleMenuClick = () => {
    setOpenCategorias(false);
    setOpenMenu(true);
  };

  return {
    openCategorias,
    openMenu,
    handleCategoriasClick,
    handleMenuClick
  }
}