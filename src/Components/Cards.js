import { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea, { ImageList, Modal } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import { makeStyles } from "@material-ui/core";
import CardActions from "@mui/material/CardActions";
import Stack from "@mui/material/Stack";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
// import { makeStyles } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Card, CardMedia } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonCard from "./ButtonCard";
import { Box } from "@mui/system";
import Loader from "./Loader";

function Cards({ totalResults, booksData, searchField, field }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  console.log(open);
  const theme = createTheme();
  const useStyles = makeStyles((theme) => ({
    result: {
      [theme.breakpoints.down("lg")]: {
        textAlign: "center",
        // display: "flex",
        // flexDirection: "column",
      },
    },

    ImageList: {
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "center",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        maxWidth: "100%",
        height: " auto",
      },
    },
  }));
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "gray",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  let params = useParams();
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography
          variant='h4'
          className={classes.result}
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          {totalResults} Total Results of {field}
        </Typography>
        <Grid
          container
          item
          xs={3}
          sm={6}
          md={12}
          className={classes.ImageList}
        >
          {booksData?.map((data) => {
            return (
              <Card
                sx={{
                  maxWidth: 345,
                  marginLeft: "16%",
                  margin: "50px ",
                  backgroundColor: "white",
                  boxShadow: 3,
                }}
              >
                {/* <CardMedia
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {<img src={data?.multimedia[1]?.url} />}
                </CardMedia> */}
                <CardContent>
                  <Typography sx={{ padding: "10px" }}>
                    <Typography
                      sx={{ fontFamily: "fantasy", fontSize: "20px" }}
                    >
                      {data?.headline?.print_headline}
                    </Typography>
                    <Typography
                      noWrap
                      sx={{
                        color: "gray",
                        paddingTop: "10px",
                        fontSize: "15px",
                      }}
                    >
                      {data?.abstract}
                    </Typography>
                    <Typography sx={{ fontSize: "15px", paddingTop: "10px" }}>
                      <b>Author</b> :{data?.byline?.original}
                    </Typography>
                    <Typography
                      level='body2'
                      noWrap
                      sx={{ paddingTop: "10px" }}
                    >
                      <b> Published</b> : {data?.pub_date}
                    </Typography>
                    <Typography sx={{ font: "10px", paddingTop: "10px" }}>
                      <b> section Name </b>: {data?.section_name}
                    </Typography>
                    <Typography sx={{ font: "10px", paddingTop: "10px" }}>
                      <b> Document </b>:{data?.document_type}
                    </Typography>
                    <Typography sx={{ paddingTop: "10px" }}>
                      <a href={data?.web_url} target='_blank'>
                        <button
                          className='btn btn-primary'
                          // onClick={submitCard}
                          // onClick={handleOpen}
                        >
                          Go to Page
                        </button>
                      </a>
                    </Typography>
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>

              // <Card
              //   className={classes.card}
              //   sx={{
              //     border: "1px solid black",
              //     width: "75%",
              //     maxWidth: 375,
              //     margin: "50px 30px 0px",
              //     marginBottom: "4%",
              //     marginLeft: "30%",
              //   }}
              // >
              //   {/* <CardActionArea sx={{}}> */}
              //   <CardMedia height='340' className={classes.ImageListItem}>
              //     {<img src={data?.book_image} />}
              //   </CardMedia>
              //   <CardContent>
              //     <Typography sx={{ padding: "10px" }}>
              //       <Typography
              //         sx={{ fontFamily: "fantasy", fontSize: "20px" }}
              //       >
              //         {data?.title}
              //       </Typography>
              //       <Typography
              //         className='truncate'
              //         sx={{
              //           color: "gray",
              //           paddingTop: "10px",
              //           fontSize: "15px",
              //         }}
              //       >
              //         {data?.description}
              //       </Typography>
              //       <Typography sx={{ fontSize: "15px", paddingTop: "10px" }}>
              //         <b>Author</b> :{data?.author}
              //       </Typography>
              //       <Typography
              //         level='body2'
              //         noWrap
              //         sx={{ paddingTop: "10px" }}
              //       >
              //         <b> Publisher</b> : {data?.publisher}
              //       </Typography>
              //       <Typography sx={{ font: "10px", paddingTop: "10px" }}>
              //         <b> Isbns </b>: {data?.isbns[0]?.isbn13}
              //       </Typography>
              //       <Typography sx={{ font: "10px", paddingTop: "10px" }}>
              //         <b> Buy Now </b>:
              //         {data?.buy_links?.map((item) => {
              //           return (
              //             <div>
              //               <a className='flex' href='#'>
              //                 {item.name}
              //                 <BiLinkExternal />
              //               </a>
              //             </div>
              //           );
              //         })}
              //       </Typography>
              //       <Typography sx={{ paddingTop: "10px" }}>
              //         <a href={data?.amazon_product_url} target='_blank'>
              //           <button className='btn btn-primary' type='submit'>
              //             Go to Page
              //           </button>
              //         </a>
              //       </Typography>
              //     </Typography>
              //   </CardContent>
              //   {/* </CardActionArea> */}
              // </Card>
            );
          })}
        </Grid>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='parent-modal-title'
            aria-describedby='parent-modal-description'
          >
            <Box sx={{ ...style, width: 400 }}>
              <ImageList
                sx={{ width: 300, height: 450 }}
                cols={3}
                rowHeight={164}
              >
                <div>
                  {booksData?.map((item) => {
                    return (
                      <Card>
                        <ImageListItem>
                          <img src={item?.book_image} />
                        </ImageListItem>
                        <Typography>{item?.author}</Typography>
                      </Card>
                    );
                  })}
                </div>
              </ImageList>
            </Box>
          </Modal>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Cards;
