package model.domain;

public class CompanyDTO {
		private String companyName;
		private String companyImage;
		private String companyData;
		public CompanyDTO() {}
		
		public CompanyDTO(String companyName, String companyImage, String companyData) {
			super();
			this.companyName = companyName;
			this.companyImage = companyImage;
			this.companyData = companyData;
		}

		public String getCompanyName() {
			return companyName;
		}

		public void setCompanyName(String companyName) {
			this.companyName = companyName;
		}

		public String getCompanyImage() {
			return companyImage;
		}

		public void setCompanyImage(String companyImage) {
			this.companyImage = companyImage;
		}

		public String getCompanyData() {
			return companyData;
		}

		public void setCompanyData(String companyData) {
			this.companyData = companyData;
		}

		@Override
		public String toString() {
			return "[companyName=" + companyName + ", companyImage=" + companyImage + ", companyData="
					+ companyData + "]";
		}
		
		
		
		
		
}
