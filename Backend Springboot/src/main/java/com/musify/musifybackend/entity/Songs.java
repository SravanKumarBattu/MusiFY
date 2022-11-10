package com.musify.musifybackend.entity;


import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "songs")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Songs {
	
	
	private String s_id;
	private String sName;
	private String sUrl;
	private String sSrc;
	
	public String getS_id() {
		return s_id;
	}
	public void setS_id(String s_id) {
		this.s_id = s_id;
	}
	public String getsName() {
		return sName;
	}
	public void setsName(String sName) {
		this.sName = sName;
	}
	public String getsUrl() {
		return sUrl;
	}
	public void setsUrl(String sUrl) {
		this.sUrl = sUrl;
	}
	public String getsSrc() {
		return sSrc;
	}
	public void setsSrc(String sSrc) {
		this.sSrc = sSrc;
	}
	

}
