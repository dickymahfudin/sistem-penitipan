$(document).ready(function () {
  $("body").on("click", ".modal-open", function (e) {
    e.preventDefault();
    const me = $(this),
      id = me.attr("id"),
      url = me.attr("href"),
      title = me.attr("title");

    $.ajax({
      url: url,
      data: { id },
      dataType: "html",
      success: (response) => {
        $(".modal-title").text(title);
        $(".modal-body").html(response);
      },
    });
  });

  $("#btn-action").click(function (e) {
    e.preventDefault();
    const form = $(".modal-body form"),
      url = form.attr("action"),
      method = form.attr("method");

    $.ajax({
      type: method,
      url: url,
      data: form.serialize(),
      success: function (response) {
        $("#modal").modal("hide");
        console.log(response);
        const message =
          method == "POST"
            ? "Data Berhasil DiTambahkan"
            : "Data Berhasil DiUpdate";
        demo.showNotification({ color: "primary", message });
      },
    });
  });
});
