
CREATE SCHEMA IF NOT EXISTS  pizza;

-- Drop existing tables if they exist

DROP TABLE IF EXISTS pizza_toppings;
DROP TABLE IF EXISTS pizzas;
DROP TABLE IF EXISTS toppings;

-- Create the toppings table
CREATE TABLE toppings (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Create the pizzas table
CREATE TABLE pizzas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

create table pizza_toppings (
  pizza_id int references pizzas,
  topping_id int references toppings,
  primary key (pizza_id, topping_id)
);

-- Insert data into the toppings table
INSERT INTO toppings (name)
VALUES
    ('anchovy'),
    ('bacon'),
    ('basil'),
    ('chili'),
    ('mozzarella'),
    ('mushroom'),
    ('olive'),
    ('onion'),
    ('pepper'),
    ('pepperoni'),
    ('sweetcorn'),
    ('tomato');

-- Insert data into the pizzas table
INSERT INTO pizzas (name)
VALUES
    ('Blazin'' Inferno');

-- Insert data into the pizza_toppings table
INSERT INTO pizza_toppings (pizza_id, topping_id)
VALUES
    (1, 10), -- Blazin' Inferno with pepperoni
    (1, 9);  -- Blazin' Inferno with pepper

GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA pizza TO postgres, authenticated, service_role, dashboard_user, anon;
GRANT USAGE ON SCHEMA pizza TO postgres, authenticated, service_role, dashboard_user, anon;

