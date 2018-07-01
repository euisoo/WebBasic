package model.domain;

public class UserDTO {
	private String id;
	private String pw;
	private String name;
	private String email;
	private String country;
	private String address;
	
	public UserDTO(String string) {}
	
	
	public UserDTO(String id, String pw, String name, String email, String country, String address) {
		super();
		this.id = id;
		this.pw = pw;
		this.name = name;
		this.email = email;
		this.country = country;
		this.address = address;
	}


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPw() {
		return pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}


	@Override
	public String toString() {
		return " [id=" + id + ", pw=" + pw + ", name=" + name + ", email=" + email + ", country=" + country
				+ ", address=" + address + "]";
	}
	
	
	

}
