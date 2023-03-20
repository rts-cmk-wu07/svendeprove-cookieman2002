# Landrup Dans 
 
Name: Magnus Larsen

Team: wu-07 

Uddanelse: web-Developer

## Approach

### MVP
- [Project](https://github.com/orgs/rts-cmk-wu07/projects/16/views/1)
- [issues](https://github.com/rts-cmk-wu07/svendeprove-cookieman2002/issues)
## Backend

[landrup dans api](#https://github.com/cookieman2002/landrup-dans-api)

## Users
| Users       | Passwords | 
| :---        |    :----: |  
| user1       | 1234       |
| user2       | 1234       |
| user3       | 1234       | 
| user4       | 1234       |
| user5       | 1234       | 
| user6       | 1234       |
| Instructor4   | 1234     |  

## Frontend-stacks

 [Code-example](#code-example)

- [React](#React)
- [React-toastify](#react-toastify)
- [React-router-dom](#react-router-dom)
- [Feather-icons-react](#feather-icons-react)
- [axios](#axios)
- [TailwindCSS](#tailwind-css)
- [Framer-motion](#framer-motion)
- [react-use-cookie](#react-use-cookie)

## Changes in assignment

- `a back-button` so when you are on login page you can always choose to go back see the rest of page before you choose to be a member of the site

## Animationer

- `kom i gang button` 
this button appears on the welcome page as one of the first things you see it appears from the bottom and up and scales from 10 to 1

- `No results`
it appears when you dont have any results or haven't searched anything in the search field it scales in from 0 to 1 and opacity from 0 to 1

### React

#### Perspective && brief-description
  i am using `React` that is a framework library that made out javascript components and i am using it beacause it has a big community and its very easy to scale up on and tons of diffrent ways to solve a problem unlike `Angular` that is very restricted to one way to solve a problem it also has a big community and is very popular

### React-Router-dom
#### brief-description
 `React-Router-dom` is a way to make it easier to navigate in diffrent through the url pages and can set a state through a link when you navigate to another site that remembers different stuff from the previous page 

#### Perspective
 i am using `React-router-dom` since its more well known and has big community unlike `react-router-native` which is made for if you make a `react-native` mobile app 

### Tailwind css
#### brief-description
`tailwindCSS` is a framework that has a lot of defined styles that can be called via specific classnames fx. `width: 1rem; `is `w-4` or `display: flex;` is `flex`

#### Perspective
 i am using `tailwind css` since its the css library that can make styling very easy and simple so you dont have to go into a stylesheet and you can just call a classname and if you wanna define a value you can unlike `bootstrap` where you can do the same unless it keeps you in an 12 lined grid

### Axios
#### brief-description
`axios` is a library that can call an http client for node.js that uses XMLHttpRequests 
#### Perspective
  i am using `axios` since its backwards compatible and it automates stringify

### Feather-icons-react
#### brief-description
`feather-icons-react` is a icon library that contains tons of svg icons that you can use via making an variable that contains all svg icons or take a single icon out of the library

#### perspective
i am using `feather-icons-react` since its too big of a library that can be used on a lot of applications and low-end pcs unlike `lucide-icon` that has very big library 

### Framer motion
#### brief-description

Framer motion is a library with a tons of css styles and makes it so you add a component that is named motion that you can put on a regular div or p and give it an initial and animate 

#### perspective
 
 i am using `framer-motion` so i can make some animations easier to the a button and a text so i dont have to focus to much how to animate in a css stylesheet
 where in `Remotion` and it does'nt help that the documentation is confusing

### react-use-cookie
#### brief-description
`react-use-cookie` is a library that can make a cookie easy and being made into a usestate where you can choose its key, value and how long it validfor

#### perspective
 i am using `react-use-cookie`
 to make an simple cookie to keep some data to x amount of time and put into the context so i can keep reusing it where `react-cookie` is too compacted for just cookie with all it options


### react-toastify
#### brief-description
`react-toastify` is library that can make a simple notification pop-up with a message with whatever you want except an icon or html tags and you can choose how it appears


#### perspective

i am using `react-toastify` to notify user of changes like you have logged in or you have an error where `swal` can be very long to make a single notification and it works like an alert

##  Code examples

### Filter To instructor

```javascript
  useEffect(() => {
    (async function () {
      const activities = data ? data.map((item) => item.instructorId) : "";

      const userId =
        activities &&
        activities.filter((activity) => activity === userToken.userId);
      if (userId.length <= 0) {
        setNoData(true);
      }
      const res = await axios.get(
        `http://localhost:4000/api/v1/users/${userToken.userId}/roster/${userId}`,
        { headers: { Authorization: "Bearer " + userToken.token } }
      );
      setRoster(res.data);
    })();
  }, [data, userToken.userId, userToken.token]);
  const header = roster ? roster[0].activity : null;
  
  ```


i am using an useEffect to run the code once and the useEffect contains axios get call that gets API response we have been given with its roster and check which user you are logged in with via token that lies in the cookie when you have logged in then i filter all the activities to look for which the user matches with the instructorId and only gives those that matches and check if there is no user in the activity the it gives no data back

### i Will explain UseAxios

```javascript
export default function UseAxios({url, headers = {}, method = "GET"}){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        (async function(){
            if(!url) return
            try {
                setLoading(true)
                const res = await axios({url, headers, method})
                setData(res.data)
            } catch (error) {
                setError("du har fået en error")
                console.error(error)
            }
            finally{
                setLoading(false)
            }
        })()
        /* eslint-disable-next-line */
    }, [url]);

    return {data, loading, error}
 ```
