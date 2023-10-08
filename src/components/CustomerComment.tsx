import { FormEvent, useEffect, useState } from 'react'
import { axiosInstance } from '../api/axiosConfig'
import { AxiosError } from 'axios'
import useAuthStore from '../store/authStore';
import { CustomerRating } from '.';
import { UserType } from '../types';
import { useNavigate, useLocation } from "react-router-dom"
import StarRating from './StarRating';
import toast from 'react-hot-toast';

type AuthType = {
    user: UserType;
    isAuthenticated: boolean;
}
type CommentUserType = {
    image: string;
    email: string;
}

type FetchedCommentType = {
    user: CommentUserType;
    rating: number;
    comment: string;
}
type PropType = {
    id:string;
    category: string;
    productName: string;
}
const getComment = (id:string) => {
    const data = localStorage.getItem(id);
    if(data){
        return JSON.parse(data);
    }
    return [];
};

const CustomerComment = ({id, category, productName}:PropType) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [commentList, setCommentList] = useState<FetchedCommentType[] | []>(getComment(id));
    const [addComment, setAddComment] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const [hoveredRating, setHoveredRating] = useState<number>(0);
// 
    const {user,isAuthenticated}= useAuthStore() as AuthType;
    const navigate = useNavigate();
    const location = useLocation();
    const currentLocation = location.pathname;
    
    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault();
        if(addComment === '' || rating === 0){
            setAddComment('');
            toast.error('Please select star and write a comment before submitting.',{duration: 4000});
        }else{
            const newComment: FetchedCommentType = {
                user: {
                    email:user.email,
                    image: user.image,
                },
                rating,
                comment: addComment
            }
            console.log('add comment',newComment);
            if(commentList){
                const existingArray = JSON.parse(localStorage.getItem(id) || '[]');
                existingArray.unshift(newComment);
                localStorage.setItem(id, JSON.stringify(existingArray)); 
                setCommentList(existingArray);
                }else {
                    localStorage.setItem(id, JSON.stringify(newComment));
                }  
                toast.success('Thank you for your review. Happy shopping.',{duration: 4000});    
        }
        setAddComment('');
        setRating(0);
        setHoveredRating(0);
    }
    
    useEffect(()=>{
        setIsLoading(true);
        const fetchComment  = async() => {
            try {
                if(commentList.length < 1){
                    // if local storage is empty for single product
                    const response = await axiosInstance.get('/product-reviews');
                    const fetchedComment = response.data as FetchedCommentType[];
                    setCommentList(fetchedComment);
                    localStorage.setItem(id, JSON.stringify(fetchedComment));
                    
                }else{
                    setCommentList(getComment(id));
                }
            } catch (error) {
                const axiosError = error as AxiosError;
                console.log('API Error',axiosError); 
            }finally{
                setIsLoading(false);
            }
        }
        fetchComment();
        
    },[id,commentList.length]);

    // console.log(isLoading);
    if(isLoading){
        return (
        <div className='max-w-screen-xl mx-auto flex flex-col justify-between items-center'>
            <div className="w-16 h-16 my-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        </div>
        )} 

return (
    <div className='max-w-screen-lg mx-auto lg:w-[50rem] bg-slate-100 p-2 md:p-4 mt-5 rounded-md'>
        <div className='flex justify-center items-center gap-2 lg:gap-5'>
            {isAuthenticated? <>
            
            <form onSubmit={handleSubmit} className='flex flex-wrap items-center justify-center gap-4 border-b-2 py-5'>
                <StarRating rating={rating} hoveredRating={hoveredRating} setRating={setRating} setHoveredRating={setHoveredRating} />
                <input className='py-1 px-2 rounded-md focus:outline-none' value={addComment} type="text" name="addComment" id="addComment" onChange={(e)=>setAddComment(e.target.value)} placeholder='Add comment'/>
                <button className='py-1 px-2 bg-green-400 rounded-md' type='submit'>Add comment</button>
            </form></>
            :
            <button onClick={()=>navigate('/signin', { state: { from: currentLocation } })} className='uppercase px-2 py-1 rounded-lg bg-sky-400 text-slate-100 hover:bg-sky-600 hover:text-slate-200'>Please Sign in to add comment</button>
            }
        </div>

        {commentList.map((singleComment, index)=>{
            const keyId = singleComment.user.email+index;
            const { user, rating, comment } = singleComment;
            return (
            <div key={keyId} className='flex gap-4 items-center sm:gap-8 md:gap-10 p-4 border-b-2 border-slate-200'>
            {/* First Child Div */}
            <div className='w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden'>
            <img className='w-full h-full object-cover' src={user.image} alt={user.image} />
            <p>{user.image}</p>
            </div>
            {/* Second Child Div */}
            <div className='flex flex-col justify-center flex-grow'>
                <p>{user.email}</p>
                <CustomerRating rating={rating} />
                <p className='text-slate-500 text-sm'>Product variation: {productName}</p>
                <p className='text-slate-500 text-sm'>Category: {category}</p>
                <p>{comment}</p>
            </div>
            </div>
            )
        })}

    </div>
  )
}

export default CustomerComment;