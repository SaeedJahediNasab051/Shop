import React from 'react';

//Images
import picMe from "../../assets/images/MyPicture.png"

//Styles
import styles from "./MyStory.module.css"

const MyStory = () => {
    return (
        <section className={styles.aboutMe}>

            <div className={styles.AboutMeImage}>
                <img src={picMe} alt="Pic" />
            </div>
            
            <section className={styles.biography}>
                <h2> درباره‌ی من</h2>
                <p>
                بیست و شش سالمه و ساکن تهرانم، فارغ التحصیل دانشکده ثامن الحجج (ع) مشهد 
                با مدرک مهندسی مکانیک - ساخت و تولید. داستان من اینه که
                از همون اول کار با کامپیوتر خیلی برام لذت بخش بود, و این شد که کم کم تصمیم گرفتم وارد دنیای
                برنامه نویسی شم و دیدم دقیقا همون کاریه که ازش خسته نمیشم, و هر روز
                که بیشتر در موردش میفهمم اشتیاقم بیشتر و بیشتر میشه, الان هم دارم
                خودمو آماده میکنم که وقتی فرصت شغلی جدید رو گرفتم چالش هاش رو بتونم حل
                کنم و بازم پیشرفت کنم.
                </p>
            </section>


        </section>
    );
};

export default MyStory;