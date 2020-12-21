// const express = require("express");
// const router = express.Router();
// const Character = require("../../models");

function selected(who) {
  const characterAttack = $(document.getElementById("#stat-1"));
  const url = "api/characters/" + who;
  $.ajax({
    url: url,
    method: "GET"
  }).then(function(results) {
    console.log("Character-Select");
    console.log(results);
    // $.get("/character-select", function(req, res) {
    //   res.render("character-select", {
    //     health: results.hp,
    //     attack: results.atk,
    //     defense: results.def,
    //     magAttack: results.magAtk,
    //     magDefense: results.magDef
    //   });
    // });
  });
}

$(document).ready(
  () => {
    $("#submit-character-selection").click(() => {
      window.location.href = "/battle";
    });
    // function selected(who) {
    //   // const characterSelect = $(document.getElementById("#characters").val());
    //   const url = "api/characters/" + who;
    //   $.ajax({
    //     url: url,
    //     method: "GET"
    //   }).then(function(results) {
    //     console.log(results);
    //     // res.render("character-select", {
    //     //   health: results.hp,
    //     //   attack: results.atk,
    //     //   defense: results.def,
    //     //   magAttack: magAtk,
    //     //   magDefense: magDef
    //     // });
    //   });
    // }
    // if ($("#characters").val("Warrior")) {
    //   // $("#characters").val("Warrior")
    //   $.get("/api/characters/warrior", function(req, res) {
    //     return db.Characters.findOne({ where: { name: "warrior" } }).then(
    //       function(result) {
    //         res.render("character-select", { health: result.hp });
    //       }
    //     );
    // case $("#characters").val("Mage"):
    //   $.get("/api/characters/Mage", function(req, res) {
    //     res.json();
    //   }).then(function(result) {
    //     {
    //       {
    //         health: result.hp;
    //       }
    //     }
    //   });
  }
  // );
  // }
  // }
  // }
);
