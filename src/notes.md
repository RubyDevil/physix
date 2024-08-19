# Collision Detection

## **Broad phase** vs **Narrow phase**
- **Broad phase**: quickly determine which objects are close enough to require a more precise check.
- **Narrow phase**: precisely check for collisions between objects.

## **Collision detection algorithms**

### Broad phase
- **Grid-based collision detection**: divide the game world into a grid and check for collisions only between objects in the same grid cell.

### Narrow phase
- **(AABB) Axis-aligned bounding box**: check for collisions between the bounding boxes of *non-rotated rectangular* objects.
- **(SAT) Separating axis theorem**: check for collisions between the convex hulls of *regular or irregular polygonal* objects.