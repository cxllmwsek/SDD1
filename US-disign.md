@startuml
left to right direction
skinparam packageStyle rectangle

' ================== ACTORS ==================
actor Customer
actor Member
actor "Barista / Staff" as Staff
actor Admin
actor "Payment Gateway" as Payment

' ================== SYSTEM ==================
rectangle "Coffee Shop System" {

  ' ---- Security ----
  (Login)

  ' ---- Order Flow ----
  (Order Coffee)
  (Check Stock)
  (Calculate Price)
  (Make Payment)

  ' ---- Optional Benefits ----
  (Use Member Points)
  (Apply Promotion Code)

  ' ---- Operations ----
  (Update Order Status)

  ' ---- Management ----
  (Manage Menu)
  (Manage Stock)
  (View Sales Reports)
}

' ================== CUSTOMER ==================
Customer --> (Order Coffee)
Member --> (Order Coffee)

' ================== STAFF ==================
Staff --> (Login)
Staff --> (Update Order Status)
Staff --> (Manage Menu)

' ================== ADMIN ==================
Admin --> (Login)
Admin --> (Manage Menu)
Admin --> (Manage Stock)
Admin --> (View Sales Reports)

' ================== ORDER LOGIC ==================
(Order Coffee) --> (Check Stock) : <<include>>  
(Order Coffee) --> (Calculate Price) : <<include>>  
(Order Coffee) --> (Make Payment) : <<include>>  

' ================== OPTIONAL ==================
(Order Coffee) --> (Use Member Points) : <<extend>> 
(Order Coffee) --> (Apply Promotion Code) : <<extend>>  

' ================== SECURITY ==================
(Manage Menu) --> (Login) : <<include>>        
(Manage Stock) --> (Login) : <<include>>
(View Sales Reports) --> (Login) : <<include>>
(Update Order Status) --> (Login) : <<include>>

' ================== EXTERNAL SYSTEM ==================
Payment --> (Make Payment)

@enduml
