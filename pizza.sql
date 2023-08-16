-- Drop existing schema and all tables if they exist
DROP SCHEMA IF EXISTS pizza CASCADE;

-- Create the pizza schema
CREATE SCHEMA IF NOT EXISTS pizza;

CREATE TABLE pizza.pizzas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    toppings JSONB NOT NULL
);

CREATE TABLE toppings (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- Insert data into the pizzas table with JSONB toppings
INSERT INTO pizza.pizzas (name, toppings)
VALUES
    ('Blazin'' Inferno',
     '[{"id":1,"name": "onion"}, {"id":2,"name": "mushroom"}]'
    );

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

-- Grants to roles can be added here if needed
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA pizza TO postgres, authenticated, service_role, dashboard_user, anon;
GRANT USAGE ON SCHEMA pizza TO postgres, authenticated, service_role, dashboard_user, anon;
GRANT USAGE, SELECT ON SEQUENCE pizzas_id_seq TO postgres, authenticated, service_role, dashboard_user, anon;
GRANT INSERT ON TABLE pizzas  TO postgres, authenticated, service_role, dashboard_user, anon;


