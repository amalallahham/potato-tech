import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Box, Button, Stack } from "@mui/material";
import headerStyles from "./header.module.css";
import { flexbox } from "@mui/system";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        py={4}
        className={`${headerStyles["full-width"]}`}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          className={headerStyles["pointer"]}
          onClick={() => {
            console.log(router.back());
          }}
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <ArrowBackIosNewOutlinedIcon
              className={`${headerStyles["color-bright-green"]} ${headerStyles["font-size-15px"]}`}
            />
          </Box>
          <div>
            <span className={`${headerStyles["color-bright-green"]} `}>Back</span>
          </div>
        </Stack>

        <div>
          <span className={`${headerStyles["color-bright-green"]} bold`}>My Account</span>
        </div>

        <Button>
          <SettingsOutlinedIcon
            className={`${headerStyles["color-bright-green"]}  font-size-20px`}
          />
        </Button>
      </Stack>
    </>
  );
};

export default Header;
