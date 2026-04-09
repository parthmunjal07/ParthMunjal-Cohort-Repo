vehicles [icon: car, color: Purple] {
  id serial pk
  vehicle_type_id int fk
  vehicle_plate varchar(15)
  created_at timestamp
  updated_at timestamp
}
vehicle_types [color: Orange] {
  id serial pk
  type_name varchar(20)
  amt_per_hr decimal
  created_at timestamp
}
parking_tickets [icon: ticket, color: Blue] {
  ticket_id serial pk
  vehicle_id int fk
  payment_id int fk
  parking_spot_id int fk
  entry_at timestamp
  exit_at timestamp
}
parking_zones [icon: map-pin, color: Yellow] {
  id serial fk
  parking_bulding varchar(10)
  parking_floor varchar(10)
  parking_section varchar(10)
  created_at timestamp
  updated_at timestamp

}
payment_details [icon: dollar-sign, color: Green] {
  id serial pk
  amount decimal
  payment_method varchar(20)
  created_at timestamp
  updated_at timestamp
}

parking_spot [icon: road, color: Red] {
  id serial fk
  is_occupied boolean
  parking_zone_id int fk
  is_ev_charger_av boolean
  created_at timestamp
  updated_at timestamp
} 
parking_sessions [icon: calendar, color: Black, colorMode: bold] {
  session_id serial pk
  ticket_id int fk
  spot_id int fk
  duration_in_hrs decimal
  session_status text
}

vehicle_types.id < vehicles.vehicle_type_id
vehicle_types.amt_per_hr < payment_details.amount
vehicles.id - parking_tickets.vehicle_id
parking_tickets.parking_spot_id - parking_spot.id
parking_zones.id - parking_spot.parking_zone_id
parking_sessions.spot_id - parking_spot.id
parking_sessions.ticket_id - parking_tickets.ticket_id

