import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
//import image from '../images/blog.jpg'
// import am from '../images/amar.jpeg'
// import am from '../assets/'
import am from '../assets/medisure_logo.jpg'
import axiosInstance from '../pages/axiosInstance';
// import axiosInstance from '../pages/axiosInstance';


const PostCard = ({
    id,
    title,
    subheader,
    image,
    content,
    comments,
    likes,
    showPosts,
    likesId
}) => {

    const { userInfo } = useSelector(state => state.signIn);

    //add like
    const addLike = async () => {
        try {
            const { data } = await axiosInstance.put(`${process.env.REACT_APP_API_URL}/api/addlike/post/${id}`);
            console.log("likes", data.post);
            if (data.success == true) {
                showPosts();
            }
        } catch (error) {
            console.log(error.response.data.error);
            toast.error(error.response.data.error)
        }
    }



    //remove like
    const removeLike = async () => {
        try {
            // was empty
            const { data } = await axiosInstance.put(`${process.env.REACT_APP_API_URL}/api/removelike/post/${id}`);
            console.log("remove likes", data.post);
            if (data.success == true) {
                showPosts();
            }
        } catch (error) {
            console.log(error.response.data.error);
            toast.error(error.response.data.error)
        }
    }


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar >
                        <img src={am} 
                        style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                        alt="company-img" />
                        
                    </Avatar>
                }

                title={title}
                subheader={subheader}

            />
            <Link to={`/post/${id}`}>

                <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt="Paella dish"
                />
            </Link>
            <CardContent>
                <Typography variant="body2" color="text.primary">
                    {/* {content} */}

                    <Box component='span' dangerouslySetInnerHTML={{ __html: content.split(" ").slice(0, 10).join(" ") + "..." }}></Box>

                </Typography>
            </CardContent>
            <CardActions >
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <Box>

                        {
                            likesId.includes(userInfo && userInfo.id) ?
                                <IconButton onClick={removeLike} aria-label="add to favorites">
                                    <FavoriteIcon sx={{ color: 'red' }} />
                                </IconButton>
                                :
                                <IconButton onClick={addLike} aria-label="add to favorites">
                                    <FavoriteBorderIcon sx={{ color: 'red' }} />
                                </IconButton>
                        }

                        {likes} Like(s)
                    </Box>
                    <Box>
                        {comments}
                        <IconButton aria-label="comment">
                            <CommentIcon />
                        </IconButton>
                    </Box>
                </Box>

            </CardActions>

        </Card>
    );
}

export default PostCard;