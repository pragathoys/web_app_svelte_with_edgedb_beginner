CREATE MIGRATION m1stzejvbtzqy4ifgrkynkdcxryl7zhnnvf3pzl373ktlafhwawyvq
    ONTO initial
{
  CREATE TYPE default::Movies {
      CREATE PROPERTY release_year -> std::int64;
      CREATE REQUIRED PROPERTY title -> std::str;
  };
};
