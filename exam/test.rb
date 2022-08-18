line_people =
{"Emma-Louise O'Connor" => 45,        "Alaya Salt" => 35,
"Bjorn Churchill" => 52,              "Ciaran Kennedy" => 74,
"Abdulrahman Burn" => 13,             "Ainsley Burks" => 58,
"Cecil Aldred" => 65,                 "Kobie Calderon" => 18,
"Aamna Riggs" => 76,                  "Mia Puckett" => 48,
"Payton Truong" => 26,                "Angelo Battle" =>  5,
"Melody Ortega" => 8,                 "Alexandre Donald" => 72,
"Reginald Leblanc" => 45,             "Claudia May" => 36,
"Marius Small" => 45,                 "Ella-Grace Cain" => 84,
"Ayesha Mcgill" => 32,                "Shuaib Carty" => 83,
"Shakira Hancock" => 32,              "Indi Herrera" => 54,
"Yousef Gill" => 37,                  "Ashlee Oneill" => 11,
"Lewie Emerson" => 39,                "Gregg Ford" => 32,
"Janelle Craft" => 93}

ticket_names = ["Lewie Emerson", "Alexandre Donald", "Emma-Louise O'Connor",
"Stuart Flynn", "Shakira Hancock", "Marius Small", "Shuaib Carty",
"Hubert Murillo", "Elle-May Deacon", "Claudia May"]

ticket_names.each do |name|
  if (line_people.include? (name))
    p "#{name}: should look #{line_people[name]} years old"
  else
    p "#{name}: hasn't arrived yet"
  end
end
