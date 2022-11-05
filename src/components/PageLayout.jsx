import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import {Link, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export const PageLayout = () => {
  const DrawerApp = () => (
    <Box style={{ minWidth: "260px" }}>
      <Typography variant="h3">MENU INICIAL</Typography>
      <List>
        <ListItem>
          <ListItemButton LinkComponent={Link} to="/inicio">
            <ListItemText primary={"Sobre a empresa"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton LinkComponent={Link} to="/produtos">
            <ListItemText primary={"Produtos"} />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton LinkComponent={Link} to="/noticias">
            <ListItemText primary={"Notícias"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const ContainerMenu = () => {
    const [aberto, setAberto] = useState(false);

    const lideComOMenu = () => {
      setAberto(!aberto); 
    };

    return (
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton onClick={lideComOMenu}>
              <MenuIcon></MenuIcon>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box>
          <Drawer 
            open={aberto} 
            onClose={lideComOMenu}
          >
            <DrawerApp />
          </Drawer>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <ContainerMenu />
      <Box style={{ marginTop: "64px" }}>
        <Outlet />
      </Box>
    </>
  );
};
