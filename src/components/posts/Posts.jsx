import Post from "../post/Post"
import "./posts.css"
import { Link } from "react-router-dom"
import Single from "../../pages/single/Single"


export default function Posts(props){
    return (
        <div className="posts">
            <Link to="/SinglePost"><Post src="https://rachlmansfield.com/wp-content/uploads/2021/08/IMG_6900-768x1024.jpg" postTitles="Vegan CHICKPEA SALAD SANDWICH" postDesc="This vegan CHICKPEA SALAD SANDWICH! Think of it like a tuna or 
                egg salad but vegan and not boring. This vegan CHICKPEA SALAD SANDWICH! This vegan CHICKPEA SALAD SANDWICH! This vegan CHICKPEA sandwhich has become my got to snack." postDate="20 min ago"/></Link>
            <Post src="https://rachlmansfield.com/wp-content/uploads/2018/03/683F6AE1-51D7-46B4-B964-5B24CC79C184.jpg" postTitles="Sweet Potato + Greens Quesadilla (Vegan)" postDesc=" get these quesadillas extra crispy by crisping them in my cast iron skillet with some avocado oil.
                I love using these tortillas because they don’t fall a part and they are grain-free, vegan and taste amazing.
                Let me know if you make these! And don’t forget to tag me on Instagram if you do!
                WHAT YOU NEED
                Tortillas 
                Organic Girl Baby Spinach
                Roasted sweet potato
                Dairy-Free cheese of choice
                Caramelized onions
                Avocado
                Avocado oil" />
            <Post src="https://rachlmansfield.com/wp-content/uploads/2021/05/IMG_9710-768x1024.jpg" postTitles="Blueberry Pancake Cookies" postDesc="The PANCAKE COOKIE! AKA what to make when you either want a little breakfast action after dinner.
                Or when you want cookies for breakfast. Both of which are a-okay in my book.
                I have to give a major shout out to Krusteaz for inspiring this recipe to happen. I am absolutely obsessed with their pancake mix.
                The buttermilk mix is a staple over here for classic cakes and for twists like my INSANE Blueberry Crumb Cake Pancake Skillet! We have a huge family size bag that makes 180 pancakes. And let me just say
                we are going through it way too quickly. Their mix has no artificial flavors, colors or preservatives. Plus it has you feeling all confident in the kitchen because of how easy they make it for us to whip up a
                stack of pancakes. Or in this case.. COOKIES!" postDate="45 min ago"
                />
            <Post src="https://rachlmansfield.com/wp-content/uploads/2021/09/IMG_2592-768x1024.jpg" postTitles="strawberry smoothie" postDesc="What ingredients are in this strawberries and cream smoothie:
                Banana
                Frozen strawberries
                Cashew butter
                Coconut yogurt (or any yogurt)
                Flaxseeds
                Vanilla protein powder
                Non-dairy milk (code RACHL for 15% off!)
                Topping ideas: granola, more yogurt, nut butter, anything you want!
                How to make this strawberry smoothie:
                Add all ingredients to bender (I add milk last) and blend until smooth
                Enjoy immediately or add to fridge to enjoy when you are ready to eat!" postDate="1 hour 30 min ago"/>
            <Post src="https://rachlmansfield.com/wp-content/uploads/2021/08/IMG_4120-768x1024.jpg" postTitles="Easy And Delicious Paleo Caramel Apples" postDesc="Granny smith apples, washed and stem taken off
                Extra thick skewers
                Grass-fed butter or ghee
                Maple syrup
                Tapioca or arrowroot flour (this is needed so the caramel thickens!)
                Crushed up nuts or chocolate or anything you want!
                How to make paleo candied apples:
                Add each stick to the apple (where the stems are) and set aside. I like to keep the apples in the fridge too so they stay cold and the caramel hardens faster but totally optional
                In a small pot, melt the butter then add in the maple syrup and bring to a low boil
                Simmer and continue to stir constantly for about 4-6 minutes then add in the tapioca and whisk/mix very well over low heat or turn the heat completely off
                Once the mixture is runny but a little thicker, immediately coat each apple in the caramel sauce then sprinkle desired crushed nuts or any toppings
                Allow the apples to set for a bit then enjoy!" postDate="2 hours ago"/>
        </div>
    )
}