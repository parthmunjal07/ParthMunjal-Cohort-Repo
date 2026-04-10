buildings [icon: building, color: Green] {
  id serial pk
  location varchar(322)
  name varchar(100)
  floor_map_id int fk
  no_of_elevators int
  no_of_floors int
}
elevators [icon: box, color: Red] {
  id serial pk
  shaft_id serial fk
  elevator_model varchar(10)
  max_capacity_kgs int
  installed_at date
}
floors [color: Green] {
  id serial pk
  building_id int fk
  floor_no int
  no_of_shafts int
  desccription text
}
shafts [color: Yellow] {
  shaft_id serial pk
  building_id int fk
  shaft_number varchar(5)
}
ride_requests [icon: telegram, color: Purple] {
  req_id serial pk
  request_floor_id int fk
  final_floor_id int fk
  req_status text
  req_at timestamp
}
elevator_status [icon: circle, color: Yellow] {
  status_id serial pk
  elevator_id int fk
  current_floor_id int fk
  status_desc text
  last_updated_at timestamp
}
ride_allocation [icon: arrow-right-circle, color: Orange] {
  all_id serial pk
  req_id int fk
  elevator_id int fk
  assigned_at timestamp
  estimated_arr timestamp
}
maintenance_log [icon: log, color: Orange] {
  maintenance_id serial pk
  elevator_id int fk
  maintenance_status varchar(10)
  technician_notes text
}
ride_log [icon: log, color: Blue] {
  log_id serial pk
  elevator_id int fk
  all_id int fk
  pickup_time timestamp
  dropoff_time timestamp
}

buildings.id < shafts.building_id
buildings.id < floors.building_id
elevators.id - ride_allocation.elevator_id
elevators.id - elevator_status.elevator_id
ride_requests.req_id - ride_allocation.req_id
floors.id - elevator_status.current_floor_id
ride_requests.final_floor_id - floors.id
ride_requests.request_floor_id - floors.id
ride_log.all_id - ride_allocation.all_id
ride_log.elevator_id - elevators.id
maintenance_log.elevator_id - elevators.id



shafts.shaft_id - elevators.shaft_id

