import { useParams } from 'react-router-dom';

export const BlogDetails = () => {
    const params = useParams();

    console.log(params);
    return <div>
        Blog details { params.id }
    </div>
}