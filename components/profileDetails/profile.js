import { Box, Button, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Image from "next/image";
import profileStyles from "./profile.module.css";
const Profile = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection={"column"}
        className={profileStyles["container"]}
        p={2}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          pb={1}
        >
          <p className={`${profileStyles['font-size-19px']} bold`}>My Profile</p>

          <Button>
            <Box justifyContent="flex-end" display="flex" width={"100%"}>
              <EditIcon
                className={`font-size-20px ${profileStyles["color-grey"]}`}
              />
            </Box>
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Image
            src={"/profile.jpg"}
            width={50}
            height={50}
            className={profileStyles["border-radius-100"]}
          ></Image>
          <Box display="flex" flexDirection={"column"}>
            <p>Dewald Venter</p>
            <p>dewald@swipeic.com</p>
            <p className={profileStyles['italic']}>+96683000000</p>
          </Box>
        </Stack>
        <Box className={profileStyles["date-container"]} mt={2}>
          <p> 16 May 1985</p>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
