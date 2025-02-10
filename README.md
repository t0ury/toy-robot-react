<!-- @format -->

# Toy Robot Simulator

Demo: https://pub-4546e1ee800a4a0d9aa0c75096c1ea25.r2.dev/index.html

- ## 项目结构

  - [project]
  
    - [src]
      - [utils]
        - moveRobot.tsx
          
      - typeDefine.tsx
        
      - [components]
  
          - [Toy]
  
             - index.tsx
  
             - Toy.tsx
  
          - [PageView]
  
            - index.tsx
  
            - PageView.tsx
           
            - [components]
           
              - [ControlPanel]
           
                - index.tsx
               
                - ControlPanel.tsx
            
              - [Map]
    
                - index.tsx
      
                - Map.tsx
      
                - Tile.tsx
  
    - App.tsx
  
    - main.tsx
  
    - App.css
  
    - index.css
   
    - Toy.css

- ## 组件之间的(包含)关系
  
- #### PageView
  - _\<PageView>_ Splits the toy robot to 2 block
    - _\<Map>_ Handle the map rendering
    - _\<ControlPanel>_ Handle the 3 button to control the toy robot, also display the current position to textbox
- #### Map
  - _\<Map>_ Represent the (n\*m) map, implement use HTML \<table>
    - _\<Tile>_ Each <Tile> component represent 1 tile in the map, it can be normal land or water, etc..
- #### ControlPanel
  - _\<ControlPanel>_ Represent the side panel that contains **3** HTML \<button> to control robot, and \<input> to display (x, y, "[head]") of current coordinate and heading of the robot.
- #### Toy
  - _\<Toy>_ Represent the toy robot

- ## 功能实现的思路
  - #### Map & Toy behavior in high level
    - init map as a n*n array, each element of array is a <Tile>
    - the map 2D Array only created once? at start up
    - Toy robot is render separately, using css absolute position, thus avoid recreate the map when robot moved

  - #### Robot

    - ##### Turn robot

      ```
      # pseudocode

      turn <== ["Up", "Right", "Down", "Left"]
      current_heading <== "Up"
      count <== 1

      # counterclockwise
      while onClick("Left") do
      count <== count - 1
      if count equal to 1 then
      count <== turn.length() + 1
      end if

      # clockwise
      while onClick("Right") do
      count <== count + 1

      new_heading <== turn[turn.length() % count]
      ```

    - ##### move

      ```
      # pseudocode
      position <== [1,1]
      heading <== ['Left']

      moveStrategy <== {
      Up: [x, y + 1],
      Down: [x, y - 1],
      Left: [x - 1, y],
      Right: [x + 1, y],
      };

      while onClick('Move') do
        setPositon(
          moveStrategy[heading]
        )
      ```

  


- ## Usage
  - `git clone https://github.com/t0ury/toy-robot-react`
  - `cd toy-robot-react`
  - `npm install`
  - `npm run dev`
   
- ## Assumption
  - The robot turn clockwise while click `Right` button, or counterclockwise while click `Left` button.

  - The robot can move ahead, when it collide the edge/border, the robot will come out from the oppsite cell instead of staying still.
 
  - The Robot by default placed to tile(2,3,Up)
    
