<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Querybuilder</title>
</head>
<body>
    <?php include "config.php"; ?>
    <?php 
        include_once "querybuilder.php";
        $queryBuilder = new Querybulder($host, $user, $password, $db);

        print_r($queryBuilder->select('Students', '*'));
        echo '<br>';
        print_r($queryBuilder->delete('Students'));
        echo '<br>';
        print_r($queryBuilder->insert('Students', ['F', 'L']));
        echo '<br>';
        print_r($queryBuilder->where(['id', '1']));
        echo '<br>';
        print_r($queryBuilder->update('Students', ['F','L']));
        echo '<br>';
        // print_r($queryBuilder->getText());
        // print_r($queryBuilder->execute());
    ?>
</body>
</html>