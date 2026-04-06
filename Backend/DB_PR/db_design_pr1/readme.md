This is the Schema for more clarifications as Eraser automatically distorts some DB connections

### customers [icon: user] {
  - id serial pk
  - name varchar(50)
  - phone varchar(10)

  - created_at timestamp
  - updated_at timestamp
### }

products [icon: box] {
  - id serial pk
  - category varchar(10) ENUM(Thrifted, Handmade)
  - price decimal
  - size varchar(10) null
  - color varchar(10) null
  - qty int

  - created_at timestamp
  - updated_at timestamp
### }

### address_details [icon: map-pin] {
  - id serial pk
  - line1 varchar(100)
  - line2 varchar(100)
  - city varchar(50)
  - state varchar(50)
  - pincode int

  - created_at timestamp
  - updated_at timestamp
### }

### orders [icon: box, color: Black] {
  - id serial pk
  - customer_id int fk
  - location_id int
  - payment_type varchar(10) ENUM(COD, ONLINE)
  - payment_id int fk
  - shipping_id int fk

  - created_at timestamp
  - updated_at timestamp
### }

### shipping_details [icon: truck] {
  - id serial pk
  - order_id int fk
  - customer_id int fk
  - payment_type varchar fk 
  - location varchar(255) fk

  - created_at timestamp
  - updated_at timestamp
### }

### payment_details [icon: payment] {
  - id serial pk
  - payment_id int fk
  - order_id int fk

  - created_at timestamp
  - updated_at timestamp
### }

### order_items [icon: telegram] {
  - id serial pk
  - order_id int fk
  - product_id int fk
  - qty int
  - created_at timestamp
  - updated_at timestamp
### }

### customers.id < orders.customer_id
### address_details.id < orders.location_id


### orders.payment_id - payment_details.payment_id
### shipping_details.order_id - orders.id
### orders.location_id - shipping_details.location_id
### orders.id - payment_details.order_id
### orders.shipping_id - shipping_details.id
### address_details.id - orders.location_id
### order_items.order_id - orders.id
### products.id - order_items.product_id
