CREATE OR REPLACE FUNCTION create_user(
  p_nombre TEXT,
  p_apellido TEXT,
  p_correo TEXT
) RETURNS SETOF users AS $$
BEGIN
  RETURN QUERY
  INSERT INTO users (nombre, apellido, correo)
  VALUES (p_nombre, p_apellido, p_correo)
  RETURNING *;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION read_user(p_id INT)
RETURNS SETOF users AS $$
BEGIN
  RETURN QUERY
  SELECT * FROM users WHERE id = p_id;
END;
$$ LANGUAGE plpgsql;
