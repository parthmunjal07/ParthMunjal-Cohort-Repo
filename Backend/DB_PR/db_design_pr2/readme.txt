users [icon: user, color: Blue] {
  id serial pk
  user_name varchar(50)
  user_role varchar ENUM("trainer", "client")
  user_phone varchar(10)
  user_email varcahr (322)
}
trainers [icon: user, color: Red] {
  trainer_id serial pk
  user_id int fk
  trainer_name varchar(50)
  trainer_age int
  trainer_gender string ENUM("male", "female")
  no_of_clients_assigned int
}
clients [icon:user, color: Red] {
  client_id serial pk
  user_id int fk
  client_name varchar(50)
  client_age int
  client_gender string ENUM("male", "female")
  client_weight_kgs decimal
  client_plan int fk
  id_trainer_assgined int 
}
plan_details [icon: book, color: Green] {
  plan_id serial pk
  plan_type varchar(20)
  plan_name varchar(20)
  plan_duration varchar(50)
  plan_price decimal
}
diet_plans [icon: pizza, color: Purple] {
  id serial pk
  trainer_id int fk
  client_id int fk
  plan_id int fk
  week_no int
}
workout_plans [icon: pizza, color: Purple] {
  id serial pk
  trainer_id int fk
  client_id int fk
  plan_id int fk
  week_no int
  instructions string
}
payment_details [icon: razorpay, color: Blue] {
  payment_id serial pk
  client_id_payed int fk
  trainer_id int fk
  payment_method varchar(20)
  payment_type varchar(50) // monthly, quaterly, yearly

}
progess_trackings [icon: progress, color: Yellow] {
  id serial pk
  client_id int fk
  current_day date
  weight decimal
  daily_steps int
  calories_lg decimal // lg is loss/gain
}
session_details [icon: calendar-check, color: Yellow]{
  session_id serial pk
  session_date date
  trainer_id int fk
  client_id int fk
  duration varchar(50)
}

users.id - clients.user_id
users.id - trainers.user_id
clients.client_plan - plan_details.plan_id
session_details.trainer_id - trainers.trainer_id
session_details.client_id - clients.client_id
clients.client_id - payment_details.client_id_payed
trainers.trainer_id - payment_details.trainer_id
trainers.trainer_id - diet_plans.trainer_id
trainers.trainer_id - workout_plans.trainer_id
clients.client_id - diet_plans.client_id
clients.client_id - workout_plans.client_id
diet_plans.plan_id - plan_details.plan_id
workout_plans.plan_id - plan_details.plan_id

trainers.trainer_id > clients.id_trainer_assgined
clients.client_id < progess_trackings.client_id