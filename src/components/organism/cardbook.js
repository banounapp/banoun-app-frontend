import React from 'react';
import { CardB } from '../atoms';
import { connect } from 'react-redux';
import Spinner from '../atoms/spinner';

const CardsBook = ({ books }) => {
    return (
        <>{!books ? <Spinner /> : (
            <div className=" px-20 ">
                <div className=" lg:flex justify-between	 ">
                    <h2 className="text-base md:text-lg lg:text-lg">كتب الموصى بها</h2>
                    <a href="#" className="text-silver-tree-600"><h2 className='text-sm md:text-base lg:text-lg silver-tree-700'>عرض المزيد</h2></a>

                </div>

                <div className=" grid grid-cols-1 md:grid-cols-3  lg:grid-cols-6 py-5">

                    {books?.books?.map(item => (
                        <CardB

                            bookname={item.title}
                            link={item.link}
                            des={item.description}
                            // vote="90 صوت"
                            price="السعر : 50 جنيه"
                            // imageURL='images/book.png'
                            imageURL={`https://banoun-app.herokuapp.com/api/upload/show/${item.image?.filename}`}

                        />))
                    }

                </div>
            </div>
        )
        }
        </>

    );
};

const mapStateToProps = (state) => ({
    books: state.categories.subCategory

});

export default connect(mapStateToProps, {})(CardsBook);