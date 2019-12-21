// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Chip from "@material-ui/core/Chip";
// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";
// import Divider from "@material-ui/core/Divider";
// import Typography from "@material-ui/core/Typography";
// import Toolbar2 from "../../src/components/Toolbar/Toolbar2";
// import WhatsAppIcon from "@material-ui/icons/WhatsApp";
// import CallIcon from "@material-ui/icons/Call";
// import PersonIcon from "@material-ui/icons/Person";
// import ScheduleIcon from "@material-ui/icons/Schedule";
// import VisibilityIcon from "@material-ui/icons/Visibility";
// import LocalOfferIcon from "@material-ui/icons/LocalOffer";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "70%",
//     marginRight: "300px",
//     // marginTop: "100px",
//     marginLeft: "300px",
//     borderRadius: "10px",
//     height: "800px",
//     // maxWidth: "100%",

//     backgroundColor: theme.palette.background.paper
//   },
//   chip: {
//     // marginRight: theme.spacing(1)
//   },
//   section1: {
//     margin: "50px"
//   },
//   section2: {
//     margin: "50px",
//     marginLeft: "70px",
//     marginRight: "70px",
//     marginBottom: "10px"
//   },
//   section3: {
//     margin: "50px"
//   },
//   view: {
//     marginTop: "40px",
//     marginRight: "70px",
//     marginLeft: "70px"
//     // textAlign: "center"
//   },
//   title: {
//     textAlign: "center",
//     color: "#767676"
//   },
//   icons: {
//     // color: "#BDBDBD",
//     color: "#00a98a",
//     //Color: "#229c32",
//     marginRight: "9px",
//     marginTop: "5px"
//   },
//   callFont: {
//     fontSize: "35px",
//     color: "#14ae36",
//     marginLeft: "9px"
//   },
//   call: {
//     Color: "#14ae36",
//     float: "right",
//     marginRight: "9px",
//     fontSize: "35px"
//   },
//   data: {
//     marginLeft: "50px",
//     marginRight: "50px",
//     color: "#484747de"
//   },
//   price: {
//     fontSize: "30px",
//     marginTop: "30px",
//     color: "#484747de"
//   },
//   notes: {
//     fontSize: "22px",
//     color: "#AED581",
//     marginRight: "7px",
//     marginBottom: "10px"
//   },
//   firstTitle: {
//     fontSize: "30px",
//     color: "#AED581"
//   },
//   red: {
//     color: ""
//   },

//   green: {
//     color: "#00a98a"
//   },
//   accept: {
//     color: "#FFFFFF",
//     backgroundColor: "#AED581",
//     width: "130px",
//     height: " 40px"
//   },
//   pink: {
//     color: "#e80577"
//   },
//   subtitle: {
//     fontSize: "30px",
//     marginRight: "200px",
//     marginBottom: "10px",
//     textAlign: "center"
//   },
//   button1: {
//     "& > *": {
//       // margin: theme.spacing(1),
//       //   paddingTop: "10px",
//       //   textAlign: "right"
//       // float: "right",
//       marginRight: "25px",
//       textAlign: "center",
//       marginLeft: "450px",
//       marginTop: "55px"
//     }
//   }
// }));

// export default function MiddleDividers() {
//   const classes = useStyles();
//   const [orders, setOrder] = React.useState([]);
//   const [userId, setUserId] = React.useState("");
//   const [reciver_name, setReciver_name] = useState([]);
//   //------------------------------------- Get pending Orders ------------------------------------
//   useEffect(() => {
//     document.title = `  Orders Detail`;
//     console.log("I'm inside use effect");
//     axios
//       .get(`/api/customer/allorder_d`)
//       .then(res => {
//         setOrder(res.data);
//         console.log("I'm inside axios to get pendding orders", res.data);
//       })
//       .catch(err => {
//         console.log("I'm error inside axios to get pendding orders", err);
//       });
//   }, []);
//   ///------------------------ Accept pending Orders ------------------------------------
//   const handleAccept = id => {
//     // useEffect(() => {
//     //   document.title = ` Drivers Orders`;
//     //   console.log("I'm inside use effect Accept");
//     const orderId = id;
//     axios
//       .post(
//         `/api/driver/accept_order`,
//         { _id: orderId },
//         {
//           headers: {
//             "x-access-token": localStorage.getItem("usertoken")
//           }
//         }
//       )
//       .then(res => {
//         // console.log(res.data);
//         // setOrder(res.data);
//         console.log("accept the order", orderId);
//       })
//       .catch(err => {
//         console.log("error accept the order", err);
//       });
//   };

//   return (
//     <div>
//       <Toolbar2 />

//       <div className={classes.root}>
//         <div className={classes.section1}>
//           <Grid container alignItems="center">
//             <Grid className={classes.view} item xs>
//               <div className={classes.title}>
//                 <Typography
//                   className={classes.firstTitle}
//                   gutterBottom
//                   variant="h4"
//                 >
//                   Order Details
//                 </Typography>
//               </div>
//             </Grid>
//             <Grid item>
//               <Typography className={classes.price} gutterBottom variant="h6">
//                 $4.50
//               </Typography>
//             </Grid>
//           </Grid>
//           <div className={classes.subtitle}>
//             <Typography color="textSecondary" variant="h6">
//               check your order details and contact with driver
//             </Typography>
//           </div>
//           <Divider variant="middle" />
//         </div>

//         <div
//           className={classes.data}
//           className={classes.title}
//           className={classes.section2}
//         >
//           <Typography gutterBottom variant="body1">
//             <LocalOfferIcon className={classes.icons} /> Order Id
//           </Typography>
//           <Typography gutterBottom variant="body1">
//             <ScheduleIcon className={classes.icons} /> Order date
//           </Typography>
//           <Typography gutterBottom variant="body1">
//             <PersonIcon className={classes.icons} />
//             Sender's name:
//           </Typography>
//           <Typography gutterBottom variant="body1">
//             <PersonIcon className={classes.icons} />
//             Reciver's name:
//           </Typography>
//           <Typography gutterBottom variant="body1">
//             <CallIcon className={classes.icons} />
//             Reciver's phone:
//             <div className={classes.call}>
//               <WhatsAppIcon className={classes.callFont} />
//               <CallIcon className={classes.callFont} />
//             </div>
//           </Typography>
//         </div>
//         <Divider variant="middle" />
//         <div className={classes.title} className={classes.section2}>
//           <Divider variant="middle" />
//           <Typography className={classes.notes}>
//             <LocalOfferIcon className={classes.notes} />
//             Customer Notes
//           </Typography>
//           <div>
//             <Divider variant="middle" />
//           </div>

//           <Typography gutterBottom variant="body1">
//             <LocationOnIcon className={classes.icons} />
//             Drop off Location
//           </Typography>
//           <div>
//             <div className={classes.button1}>
//               <Button
//                 className={classes.accept}
//                 variant="contained"
//                 color="#4CAF50"
//                 // onClick={() => setOrder((order.state: "onway"))}
//               >
//                 Back
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
