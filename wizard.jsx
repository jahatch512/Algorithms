
<div id="user-page-full">
        {
          <div className="user-page-box">
            <div onClick={this.backClick} id="back-button">back to matches</div>

            <CurrentUserProfileInfo />
            <PictureUploadButton user={this.state.currentUser} />

            <div id={"detail-info-buttons"}>

              <div className={this.state.aboutSelect}
                   onClick={this.aboutClick}>
                     About </div>
              <div className={this.state.questionSelect}
                   onClick={this.questionClick}>
                   Q&A </div>

            </div>

            <div>
              "HEY"
            </div>

          </div>
        }

      </div>
;
