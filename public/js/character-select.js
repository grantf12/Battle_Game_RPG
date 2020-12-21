function selected(who) {
  const characterAttack = $("#stat-1");
  const characterMagAttack = $("#stat-2");
  const characterDef = $("#stat-3");
  const characterMagDef = $("#stat-4");
  const characterHealth = $("#stat-5");
  const url = "api/characters/" + who;
  $.ajax({
    url: url,
    method: "GET"
  }).then(function(results) {
    console.log("Character-Select");
    console.log(results);
    characterMagAttack.text(results.magAtk);
    characterAttack.text(results.atk);
    characterDef.text(results.def);
    characterMagDef.text(results.magDef);
    characterHealth.text(results.hp);
    $("#submit-character-selection").attr("data-id", results.id);
  });
}

$(document).ready(() => {
  $("#submit-character-selection").click(function() {
    const characterId = $(this).attr("data-id");
    $.post("/api/character-select/" + characterId).then(res => {
      console.log(res);
      window.location.href = "/battle";
    });
  });
});
