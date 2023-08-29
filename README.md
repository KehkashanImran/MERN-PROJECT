# MERN-PROJECT


# PIZZA PALACE

It is a Full Stack (MERN) Pizza Delivery Application developed using React for Front End, Redux-Thunk for Asynchronous operations, Node JS for Runtime environment, Express JS for Backend Routing, and Mongo DB for Database.

So you can say that your app is like a restaurant where customers use a user-friendly menu (React) to order their favorite pizzas. The orders are managed and tracked by a smart waiter (Redux-Thunk) who communicates between the customers and the kitchen. The kitchen's workspace (Node JS) ensures everything runs smoothly, while the order slip (Express JS) makes sure messages and orders are properly directed. All the information about the pizzas and orders is neatly stored in the storage room (Mongo DB) for easy access later.


## API Reference

#### Get all items

```http
  GET /api/pizzas/getallpizzas
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `getallpizzas` | `string` | The response will provide you with a list of different pizza options available for ordering. |

#### Post item

```http
POST /api/users/login
```

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | User Email |
| `password` | `string` | User Password |

The response will contain authentication details and possibly a token for further interaction with your app.

```http
POST /api/users/login
```

| Field | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | User name |
| `email` | `string` | User Email |
| `password` | `string` | User Password |

The response will provide information about the newly registered user.





## Deployment

To deploy this project run

```bash
  npm run dev
```


## Documentation

**User Roles:**

*Guest:* Unauthenticated visitors can explore our product range and get a glimpse of what we offer.

*User:* Authenticated customers have the privilege to add products to their cart, place orders, and closely track their orders.

**Authentication:**

We've implemented a robust user registration and login system using react-redux.


**Product Management:**

Our user-friendly interface allows effortless addition, editing, and deletion of products.

**Order Placement:**

Users can effortlessly add products to their cart and proceed to place orders.
Every order is assigned a unique tracking ID for easy reference. Detailed order information is stored in our database, ensuring transparent order history.

**User Order Tracking:**

Our users can effortlessly track their orders using the assigned tracking ID.
An intuitive interface displays real-time order status and progress.

**Technical Implementation:**

Our frontend boasts a plethora of components catering to user registration, login, product listings, cart management, order placement, etc.

RESTful APIs power user authentication, product management, order placement.
Middleware ensures role-based authentication and authorization, bolstering app security.

Our thoughtfully designed database schema accommodates users and products.

**Conclusion:**

With a well-structured plan and the collaborative efforts of our team, Web Divers are all set to revolutionize online food delivery. However with the passage of time we aim to improve our website and make it more user friendly and appealing. 

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| BLACK | #00000 |
| RED | #FF0000 |
| WHITE | #FFFFFF |



## Live Link 

https://long-wasp-top-coat.cyclic.app/
## Developers

- KEHKASHAN IMRAN
- AYESHA NASEEM
- MARYAM MUZAFFAR

