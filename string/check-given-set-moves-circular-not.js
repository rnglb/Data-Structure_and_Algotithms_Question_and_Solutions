/*
Check if a given set of moves is circular or not. A move is circular if its starting and ending coordinates are the same.
The moves can contain insstructions to move one unit in the ssame direction(M), to change direction to the left of current
direction(L), and to change direction to the right of current ddirection (R). Assueme that the initial direction is North.

For example,
Set of moves MRMRMRM is circular
Set of moves MRMLMRMRMMRMM is circular
*/
const isCircularMove =(str) => {
    // start from coordinates (0, 0) & assume that the initial direction is North
    let x = 0, y = 0, dir = 'N';
    for (i=0;i<str.length;i++)
    {
        switch (str[i])
        {
            case 'M':
                if (dir == 'N') {
                    y++;
                } else if (dir == 'S') {
                    y--;
                } else if (dir == 'E') {
                    x++;
                } else if (dir == 'W') {
                    x--;
                } break;

            case 'L':
                if (dir == 'N') {
                    dir = 'W';
                } else if (dir == 'W') {
                    dir = 'S';
                } else if (dir == 'S') {
                    dir = 'E';
                } else if (dir == 'E') {
                    dir = 'N';
                } break;

            case 'R':
                if (dir == 'N') {
                    dir = 'E';
                } else if (dir == 'E') {
                    dir = 'S';
                } else if (dir == 'S') {
                    dir = 'W';
                } else if (dir == 'W') {
                    dir = 'N';
                }
        }
    }
    return (x == 0 && y == 0)?"Circular move":"Non-circular move";
}

var result = isCircularMove("MMRMMRMMRMM");
console.log(result);


