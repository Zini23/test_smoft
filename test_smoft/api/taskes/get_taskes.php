<?php

require_once('../utils/database.php');

// Read Tasks with Pagination
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Set default values for page number and page size
    $page = isset($_GET['page']) ? $_GET['page'] : 1;
    $pageSize = isset($_GET['pageSize']) ? $_GET['pageSize'] : 10;

    // Calculate the offset based on the page number and page size
    $offset = ($page - 1) * $pageSize;

    $pdo = getDBConnection();

    // Query to retrieve tasks with pagination
    $query = "SELECT * FROM tasks LIMIT :pageSize OFFSET :offset";
    $stmt = $pdo->prepare($query);
    $stmt->bindValue(':pageSize', (int)$pageSize, PDO::PARAM_INT);
    $stmt->bindValue(':offset', (int)$offset, PDO::PARAM_INT);
    $stmt->execute();

    $tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if ($tasks) {
        http_response_code(200);
        echo json_encode($tasks);
    } else {
        http_response_code(404);
        echo json_encode(array("message" => "No tasks found."));
    }
} else {
    http_response_code(405);
    echo json_encode(array("message" => "Method Not Allowed"));
}