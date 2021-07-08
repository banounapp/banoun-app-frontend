
import React , {useState,useEffect} from 'react';
import { Card } from '../atoms';
import { connect } from 'react-redux';
import Spinner from '../atoms/spinner';


const CardsArticles = ({ articles }) => {
   
    const [isLoading, setisLoading] = useState(true)
    useEffect(()=>{
    setisLoading(false)
    },[articles])
 
    return (
        <>
            {!articles ||isLoading ? <Spinner /> : (
                <div className="flex flex-wrap justify-start" style={{paddingRight:"5% "}}>
                    {articles?.articles?.map(item => (

                        <Card

                            category={item.title}
                            des={item.description}
                            imageSource={`https://banoun-app.herokuapp.com/api/upload/show/${item.image?.filename}`}

                        />))}

                </div>
            )}
        </>
    );
};
const mapStateToProps = (state) => ({
    articles: state.categories.subCategory

});

export default connect(mapStateToProps, {})(CardsArticles);