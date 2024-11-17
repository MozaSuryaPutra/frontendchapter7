const HeroSection = () => {

  return (
    <div style={{ backgroundColor: "#f1f3ff" }}>
        <div id="homepage" className="homepage container-fluid">
          <div className="row">
            <div className="col-lg-6 mt-3 d-flex flex-column justify-content-center">
              <p
                className="mb-4 ms-lg-5 me-5 ps-lg-5"
                style={{ fontSize: "36px", fontWeight: "700" }}
              >
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </p>
              <p className="mb-4 ms-lg-5 me-lg-5 ps-lg-5 pe-lg-5">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
              <div className="d-flex justify-content-start ms-lg-5 ps-lg-5">
                <Button
                  className="btn btn-primary me-4"
                  style={{
                    backgroundColor: "#5CB85F",
                    borderColor: "#5CB85F",
                  }}
                  onClick={() => {
                    navigate({ to: "/search" });
                  }}
                >
                  Mulai Sewa Mobil
                </Button>
              </div>
            </div>
            <div className="col-lg-6 mt-5 d-flex align-items-end justify-content-end">
              <img
                src="/img_car.png"
                className="img-fluid w-100 car-image align-self-end"
                alt="Mercedes"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeroSection;
