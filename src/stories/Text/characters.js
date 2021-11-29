const allCharacters = `! " # $ % & ' 40 ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; 60 < = > ? @ A B C D E F G H I J K L M N O 80 P Q R S T U V W X Y Z [ \ ] ^ _ a b c 100 d e f g h i j k l m n o p q r s t u v w 120 x y z { | } ~ ‚ “ ” ÷ å ä ö Å Ä Ö`;

// no`

const characterStructures = (character) => {
  //All uppercases
  character.toUpperCase();
  let shape;
  switch (character) {
    case "A":
      shape = [0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1];
      break;
    case "B":
      shape = [1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0];
      break;
    case "C":
      shape = [0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0];
      break;
    case "D":
      shape = [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1];
      break;
    case "E":
      shape = [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1];
      break;
    default:
      shape = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  }
  return shape;
};
/*
    case "D":
      shape = [1, 1, 1, 1,
              1, 0, 0, 0, 
              1, 1, 1, 1, 
              1, 0, 0, 0, 
              1, 1, 1, 1]      
              break;



*/
