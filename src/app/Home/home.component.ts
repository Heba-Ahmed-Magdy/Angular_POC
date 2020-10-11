import { Component } from "@angular/core";

@Component({
    template:`
    <div class="row align-items-center  height_100">
        <div class="col-sm-5 col-md-7">
            <img src="https://cf.bstatic.com/data/xphoto/1182x887/175/17517554.jpg?size=S" class="w-100 h-100"/>
        </div>

        <div class="col-sm-1">
        </div>

        <div class="col-sm-5 col-md-4">
            <span class="span-intro">
                <b> We are </b>
                Sending Flowers to Cairo - Egypt from anywhere in the world using our same day delivery. Order Online flowers 
                arrangements in a Vase, Box, Bouquet for all occasions including Valentine, Mother's Day, Easter, Birthday, 
                Anniversary, Get Well Soon, Baby boy or girl, weddings, congrats, and graduation.
             </span>
        </div>
    </div>
    `,
    styles:[
        `.height_100 {
            height:550px
        },
        .span-intro {
            width: 40%;
            text-align: center;
        }`
    ]
})
export class HomeComponent{
}