users [icon: user, color: Red] {
  id serial pk
  user_name varchar(50)
  user_passwd varchar(50)
  user_phone varchar(10)
  user_email varchar(322)
  created_at timestamp
  updated_at timestamp
}
doctors [icon: doctor, color: Orange] {
  doctor_id serial pk
  user_id int fk
  doctor_name varchar(50)
  doctor_dept varchar(50)
  doctor_spec varchar(50)
  created_at timestamp
  updated_at timestamp
}
patients [icon: user, color: Orange] {
  patient_id serial pk
  user_id int fk
  patient_name varchar(50)
  patient_age int
  patient_wt decimal
  doctor_id_app int fk
  created_at timestamp
  updated_at timestamp
}

departments [icon: building, color: Blue]{
  dept_id serial pk
  name_of_dept varchar(50)
  head_doctor_id int fk
  no_of_docs int
  created_at timestamp
  updated_at timestamp
}
appointments [icon: calendar, color: Green] {
  appointment_id serial pk
  patient_id int fk
  doctor_id int fk
  time varchar(6)
  app_date date
  created_at timestamp
  updated_at timestamp
}
payment_details [icon: razorpay, color: Purple] {
  payment_id serial pk
  pay_patient_id int fk
  payment_method ENUM("Online", "Cash")
  appointment_id int fk
  created_at timestamp
  updated_at timestamp
}
consultations [icon: book-open, color: Green] {
  cons_id serial pk
  app_id int fk
  doctor_id int fk
  patient_id int fk
  cons_date date fk
  diagnosis text
  created_at timestamp
  updated_at timestamp
}
reports [icon: bookmark, color: Blue] {
  report_id serial pk
  patient_id int fk
  doctor_id int fk
  dept_id int fk
  created_at timestamp
  updated_at timestamp
}

users.id - doctors.user_id
users.id - patients.user_id
doctors.doctor_id - departments.head_doctor_id

payment_details.pay_patient_id - patients.patient_id
appointments.appointment_id - payment_details.appointment_id
appointments.doctor_id - doctors.doctor_id
appointments.patient_id - patients.patient_id

consultations.doctor_id > appointments.doctor_id
consultations.patient_id > appointments.patient_id
patients.patient_id < reports.report_id
doctors.doctor_id < reports.report_id
patients.patient_id < doctors.doctor_id
departments.dept_id < reports.dept_id


