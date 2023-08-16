import { Pizza } from '@src/models';
import { supabase } from '@src/supabaseClient';

async function removePizza(payload: Pizza): Promise<Pizza> {
  const { data: pizza, error } = await supabase.from('pizzas').delete().eq('id', payload.id).single();
  if (error) throw error;
  return pizza;
}

async function updatePizza(payload: Pizza): Promise<Pizza> {
  const { data: pizza, error } = await supabase.from('pizzas').update(payload).eq('id', payload.id).single();
  if (error) throw error;
  return pizza;
}

async function createPizza(payload: Pizza): Promise<Pizza> {
  const { data: pizza, error } = await supabase.from('pizzas').insert(payload).single();
  if (error) throw error;
  return pizza;
}

async function getPizzas(): Promise<Pizza[]> {
  const { data: toppings, error } = await supabase.from('pizzas').select('*')
  if (error) throw error;
  return toppings;
}

export const PizzaService = {
  removePizza,
  updatePizza,
  createPizza,
  getPizzas,
};