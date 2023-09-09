var count_new = 0

async function getNews(){

    const img_column = document.querySelectorAll('.img_column')
    const content_column = document.querySelectorAll('.content_column')
    

    const response = await fetch('https://g1-clone-node-react.onrender.com/news')
    const news = await response.json()

    const column_1 = news.slice(0, 4)
    const column_2 = news.slice(5, 9)
    const column_3 = news.slice(10, 14)
    const column_4 = news.slice(15, 19)
    const column_5 = news.slice(20, 24)
    const column_6 = news.slice(25, 29)
    const column_7 = news.slice(30, 34)
    const column_8 = news.slice(35, 39)
    const column_9= news.slice(40, 44)
    const column_10= news.slice(45, 49)
    const column_11= news.slice(50, 54)
    const column_12= news.slice(55, 59)
    const column_13= news.slice(60, 64)
    const column_14= news.slice(65, 69)
    const column_15= news.slice(70, 74)
    const column_16= news.slice(75, 79)
    const column_17= news.slice(80, 84)
    const column_18= news.slice(85, 89)
    const column_19= news.slice(90, 94)
    const column_20= news.slice(95, 99)
    const column_21= news.slice(100, 104)
    const column_22= news.slice(105, 109)
    const column_23= news.slice(110, 114)
    const column_24= news.slice(115, 199)
    const column_25= news.slice(120, 124)
    const column_26= news.slice(125, 129)
    const column_27= news.slice(130, 134)
    const column_28= news.slice(135, 139)
    const column_29= news.slice(140, 144)
    const column_30= news.slice(145, 149)

    if(count_new < 4){
        

        img_column[0].src= column_1[count_new].image
        content_column[0].innerText= column_1[count_new].content

        img_column[1].src= column_2[count_new].image
        content_column[1].innerText= column_2[count_new].content

        img_column[2].src= column_3[count_new].image
        content_column[2].innerText= column_3[count_new].content

        img_column[3].src= column_4[count_new].image
        content_column[3].innerText= column_4[count_new].content

        img_column[4].src= column_5[count_new].image
        content_column[4].innerText= column_5[count_new].content

        img_column[5].src= column_6[count_new].image
        content_column[5].innerText= column_6[count_new].content

        img_column[6].src= column_7[count_new].image
        content_column[6].innerText= column_7[count_new].content

        img_column[7].src= column_8[count_new].image
        content_column[7].innerText= column_8[count_new].content

        img_column[8].src= column_9[count_new].image
        content_column[8].innerText= column_9[count_new].content

        img_column[9].src= column_10[count_new].image
        content_column[9].innerText= column_10[count_new].content

        img_column[10].src= column_11[count_new].image
        content_column[10].innerText= column_11[count_new].content

        img_column[11].src= column_12[count_new].image

        img_column[12].src= column_13[count_new].image
        content_column[12].innerText= column_13[count_new].content

        img_column[13].src= column_14[count_new].image
        content_column[13].innerText= column_14[count_new].content

        img_column[14].src= column_15[count_new].image
        content_column[14].innerText= column_15[count_new].content

        img_column[15].src= column_16[count_new].image
        content_column[15].innerText= column_16[count_new].content

        img_column[16].src= column_17[count_new].image
        content_column[16].innerText= column_17[count_new].content

        img_column[17].src= column_18[count_new].image
        content_column[17].innerText= column_18[count_new].content

        img_column[18].src= column_19[count_new].image
        content_column[18].innerText= column_19[count_new].content

        img_column[19].src= column_20[count_new].image
        content_column[19].innerText= column_20[count_new].content

        img_column[20].src= column_21[count_new].image
        content_column[20].innerText= column_21[count_new].content

        img_column[21].src= column_22[count_new].image
        content_column[21].innerText= column_22[count_new].content

        img_column[22].src= column_23[count_new].image
        content_column[22].innerText= column_23[count_new].content

        img_column[23].src= column_24[count_new].image
        content_column[23].innerText= column_24[count_new].content

        img_column[24].src= column_25[count_new].image
        content_column[24].innerText= column_25[count_new].content

        img_column[25].src= column_26[count_new].image
        content_column[25].innerText= column_26[count_new].content

        img_column[26].src= column_27[count_new].image
        content_column[26].innerText= column_27[count_new].content

        img_column[27].src= column_28[count_new].image
        content_column[27].innerText= column_28[count_new].content

        img_column[28].src= column_29[count_new].image
        content_column[28].innerText= column_29[count_new].content

        img_column[29].src= column_30[count_new].image
        content_column[29].innerText= column_30[count_new].content

        img_column[30].src= column_1[count_new].image
        content_column[30].innerText= column_1[count_new].content

        img_column[31].src= column_2[count_new].image
        content_column[31].innerText= column_2[count_new].content

        img_column[32].src= column_3[count_new].image
        content_column[32].innerText= column_3[count_new].content

        img_column[33].src= column_4[count_new].image
        content_column[33].innerText= column_4[count_new].content

        img_column[34].src= column_5[count_new].image
        content_column[34].innerText= column_5[count_new].content

        img_column[35].src= column_6[count_new].image
        content_column[35].innerText= column_6[count_new].content

        img_column[36].src= column_7[count_new].image
        content_column[36].innerText= column_7[count_new].content

        img_column[37].src= column_8[count_new].image
        content_column[37].innerText= column_8[count_new].content

        img_column[38].src= column_9[count_new].image
        content_column[38].innerText= column_9[count_new].content

        img_column[39].src= column_10[count_new].image
        content_column[39].innerText= column_10[count_new].content

        img_column[40].src= column_11[count_new].image
        content_column[40].innerText= column_11[count_new].content

        img_column[41].src= column_12[count_new].image
        content_column[41].innerText= column_12[count_new].content

        img_column[42].src= column_13[count_new].image
        content_column[42].innerText= column_13[count_new].content

        img_column[43].src= column_14[count_new].image
        content_column[43].innerText= column_14[count_new].content

        img_column[44].src= column_15[count_new].image
        content_column[44].innerText= column_15[count_new].content

        img_column[45].src= column_16[count_new].image
        content_column[45].innerText= column_16[count_new].content

        img_column[46].src= column_17[count_new].image
        content_column[46].innerText= column_17[count_new].content

        img_column[47].src= column_18[count_new].image
        content_column[47].innerText= column_18[count_new].content

        img_column[48].src= column_19[count_new].image
        content_column[48].innerText= column_19[count_new].content

        img_column[49].src= column_20[count_new].image
        content_column[49].innerText= column_20[count_new].content

        img_column[50].src= column_21[count_new].image
        content_column[50].innerText= column_21[count_new].content

        img_column[51].src= column_22[count_new].image
        content_column[51].innerText= column_22[count_new].content

        img_column[52].src= column_23[count_new].image
        content_column[52].innerText= column_23[count_new].content

        img_column[53].src= column_24[count_new].image
        content_column[53].innerText= column_24[count_new].content

        img_column[54].src= column_25[count_new].image
        content_column[54].innerText= column_25[count_new].content


    } else {

        count_new = 0

    }
    
    count_new++

}

document.addEventListener('DOMContentLoaded', async()=>{
    await getNews()
})

setInterval(async()=>{
    await getNews()
}, 4000)