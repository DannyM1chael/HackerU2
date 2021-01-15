<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Getters and Setters</title>
</head>
<body>
    <?php
        class Movie {
            public $title;
            private $rating;

            function __construct($title, $rating)
            {
                $this->title = $title;
                $this->setRating($rating);
            }

            function getRating()
            {
                return $this->rating;
            }

            function setRating($rating)
            {   
                if($rating == "PG-13" || $rating == "R"){
                    $this->rating = $rating;
                }else{
                    $this->rating = "NR";
                }
            }
        }

        $avengers = new Movie("Avengers", "PG-13");
        $avengers->setRating("NR");
        echo $avengers->getRating();
    ?>
</body>
</html>