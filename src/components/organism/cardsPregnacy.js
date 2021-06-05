import React from "react";
import { Card } from "../atoms";

export const CardsPregnacy = () => {
    return (
        <>
            <div className='block m-8 p-4 md:flex  justify-around flex-wrap '>
                {/* DIV 1 */}
                <Card
                    stylee="w-full  md:w-1/3  lg:w-1/4"
                    category="متابعه اسبوعيه"
                    des='كل ما تحتاجين معرفته عن الحمل على مدار اسابيعه'
                    imageSource="images/3.png"
                />

                {/* DIV 2 */}
                <Card
                    stylee="w-full md:w-1/3 lg:w-1/4 "
                    category="دليل الاباء لفتره الحمل"
                    des='كل ما يتعلق بصحه الام فى فتره الحمل '
                    imageSource="images/4.png"
                />

                {/* DIV 3 */}
                <Card
                    stylee=" md:w-1/3 lg:w-1/4"
                    category="الصحة"
                    des='كل ما يتعلق بصحة الام فى فترة الحمل'
                    imageSource="images/3.png"
                />
            </div>
            {/* DIV 4 */}

            <div className='block m-8 p-4 md:flex justify-around '>
                <Card
                    stylee=" w-full  md:w-1/3  lg:w-1/4 "
                    category="التحضير لاستقبال الطفل"
                    des='كل ما يتعلق بصحة الام فى فترة الحمل '
                    imageSource="images/5.png"
                />

                {/* DIV 5*/}
                <Card
                    stylee="w-full  md:w-1/3  lg:w-1/4"
                    category="الولادة"
                    des='كل ما يتعلق بصحه الام فى فتره الحمل '
                    imageSource="images/3.png"
                />
                {/* DIV 6*/}
                <Card
                    stylee="w-full  md:w-1/3  lg:w-1/4"
                    category="الاجهاض وموت الجنين"
                    des='كل ما يتعلق بصحه الام فى فتره الحمل '
                    imageSource="images/6.png"
                />
            </div>
        </>
    );
};


